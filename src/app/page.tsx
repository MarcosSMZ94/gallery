const mockUrls = [
  "https://utfs.io/f/HqjfbtwjgqJwvPAyY95NnPX8MFSiLOAUQBEVk34jKcwdZIlG",
  "https://utfs.io/f/HqjfbtwjgqJwOwLy02AykTV6Y41GMPKdU5oLwWS7u2Nnz8l0",
  "https://utfs.io/f/HqjfbtwjgqJwOwLy02AykTV6Y41GMPKdU5oLwWS7u2Nnz8l0",
  "https://utfs.io/f/HqjfbtwjgqJwp9eOcoi1PczOLsj8mMkVaSi74GFhE2XoZ0pr",
  "https://utfs.io/f/HqjfbtwjgqJwwgiiGLEU2mVOgDUa4QPGn6oFydi7eqT8hrZl",
  "https://utfs.io/f/HqjfbtwjgqJwXOAfn5o4oJa9mpxW1bfSTOz8jD0vinAE2MyB",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (images) => (
            <div key={images.id} className="w-48">
              <img src={images.url} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
