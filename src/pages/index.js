const Home = () => (
  <div className="grid place-items-center w-screen h-screen">
    <div className="grid gap-4">
      <div className="flex items-center justify-center gap-4">
        <img className="h-16 w-auto" src="/nextjs.svg" alt="Next.js Logo" />
        <img className="h-8 w-auto" src="/tailwindcss.svg" alt="Tailwind CSS Logo" />
      </div>
      <h1 className="text-2xl md:text-3xl font-medium">Welcome to NexTailwind!</h1>
    </div>
  </div>
)

export default Home
