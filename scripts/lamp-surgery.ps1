$cs = @'
using System;
using System.Drawing;
using System.Drawing.Imaging;

public static class LampSurgery {
  static Rectangle[] zones = new Rectangle[] {
    new Rectangle(39, 50, 12, 12),
    new Rectangle(42, 58, 7, 40),
    new Rectangle(33, 94, 21, 30),
    new Rectangle(78, 32, 11, 11),
    new Rectangle(82, 40, 6, 39),
    new Rectangle(84, 74, 19, 29),
  };

  static bool InAny(int x, int y) {
    foreach (var r in zones) if (r.Contains(x, y)) return true;
    return false;
  }

  public static void Process(string inPath, string roomOut, string lampOut) {
    using (var src = new Bitmap(inPath)) {
      int w = src.Width, h = src.Height;
      var bmp = new Bitmap(w, h, PixelFormat.Format32bppArgb);
      using (var g = Graphics.FromImage(bmp)) g.DrawImage(src, 0, 0, w, h);

      // Extract the lamp as a sprite: cord stub plus shade, trapezoid mask.
      int sx = 33, sy = 86, sw = 21, sh = 38;
      var lamp = new Bitmap(sw, sh, PixelFormat.Format32bppArgb);
      for (int y = 0; y < sh; y++) for (int x = 0; x < sw; x++) {
        int ax = sx + x, ay = sy + y;
        bool keep;
        if (y < 8) keep = (x >= 9 && x <= 14);
        else {
          int half = 3 + (int)Math.Round((y - 8) * 0.30);
          keep = Math.Abs(x - 11) <= half;
        }
        if (keep) lamp.SetPixel(x, y, bmp.GetPixel(ax, ay));
      }
      lamp.Save(lampOut, ImageFormat.Png);
      lamp.Dispose();

      // Clear the lamp zones and rebuild the texture behind them using the
      // 2px-periodic pattern to the left of each zone.
      foreach (var r in zones) {
        for (int y = r.Top; y < r.Bottom; y++) for (int x = r.Left; x < r.Right; x++) {
          int xs = x;
          while (xs >= 0 && InAny(xs, y)) xs -= 2;
          if (xs < 0) xs = x;
          bmp.SetPixel(x, y, bmp.GetPixel(xs, y));
        }
      }

      bmp.Save(roomOut, ImageFormat.Png);
      bmp.Dispose();
    }
  }
}
'@
Add-Type -TypeDefinition $cs -ReferencedAssemblies System.Drawing
[LampSurgery]::Process(
  (Resolve-Path "assets\agents\agent-hero\room-alt.png").Path,
  (Join-Path (Get-Location) "public\agent-hero\room-clean.png"),
  (Join-Path (Get-Location) "public\agent-hero\lamp.png"))
Write-Output "surgery done"
