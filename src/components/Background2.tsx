const Background = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d");

  if (!canvas || !ctx) {
    return <></>;
  }

  // Create a permutation table of size 256
  const perm: number[] = [];
  for (let i = 0; i < 256; i++) {
    perm[i] = Math.floor(Math.random() * 256);
  }

  // Function to generate gradient vectors for 2D noise
  function grad2(hash, x, y) {
    const h = hash & 7;
    let u = h < 4 ? x : y;
    let v = h < 4 ? y : x;
    if (h === 0) return u + v;
    if (h === 1) return -u + v;
    if (h === 2) return u - v;
    if (h === 3) return -u - v;
    if (h === 4) return u + v;
    if (h === 5) return -u + v;
    if (h === 6) return u - v;
    if (h === 7) return -u - v;
  }

  // Function to generate Perlin noise
  function perlin2(x, y) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const fx = (3 - 2 * x) * x * x;
    const fy = (3 - 2 * y) * y * y;
    const p0 = perm[X] + Y;
    const p1 = perm[X + 1] + Y;
    return lerp(
      fy,
      lerp(fx, grad2(perm[p0], x, y), grad2(perm[p1], x - 1, y)),
      lerp(fx, grad2(perm[p0 + 1], x, y - 1), grad2(perm[p1 + 1], x - 1, y - 1))
    );
  }

  // Linear interpolation function
  function lerp(t, a, b) {
    return a + t * (b - a);
  }

  // Draw Perlin noise on canvas
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      const color = perlin2(x / 50, y / 50) * 128 + 128;
      console.log(color);
      ctx.fillStyle = `rgb(${color},${color},${color})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }

  return <div color="red"></div>;
};

export default Background;
