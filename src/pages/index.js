const Home = () => (
  <div className="grid place-items-center w-screen h-screen">
    <div className="grid gap-4">
      <div className="flex items-center justify-center gap-4">
        <img className="h-12 w-auto" src="/nextjs.svg" alt="ZEIT Logo" />
        <img className="h-6 w-auto" src="/tailwindcss.svg" alt="TailwindCSS Logo" />
      </div>
      <h1 className="text-2xl md:text-3xl font-medium">Welcome to NexTailwind!</h1>
    </div>
  </div>
)

export default Home
