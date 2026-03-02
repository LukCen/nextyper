'use client'

const page = () => {
  return (
    <main className="flex flex-col gap-4 items-center">
      <section className="baseinfo flex flex-col gap-2 items-center">
        <h1>NexTyper - a typing game/exercise for practicing your speed and accuracy!</h1>
        <p>NexTyper is a web application developed for purpsoe of testing your speed and accuracy when typing.</p>
        <p>Test out your skills and see if you can beat the hall of fame!</p>
      </section>
      <section className="techstack">
        <h2>Developed using:</h2>
        <ul className="flex flex-col gap-2">
          <li>Next.js - main framework</li>
          <li>Jest - unit tests</li>
          <li>ShadCN - some components (tables for the hi-score page mostly)</li>
        </ul>
      </section>
    </main>
  )
}

export default page
