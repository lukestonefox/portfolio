function Intro () {
  return (
    <section
      id='intro'
      className='flex flex-col justify-center text-md gap-y-4 lg:pt-36'
    >
      <p>
        I have a passion for building elegant, accessible user interfaces that
        are also robust. I find great joy in intuitive design backed by reusable
        and efficient code.{' '}
      </p>
      <p>
        I'm currently a junior studying computer science at the University of
        Cincinnati, set to graduate in April 2026. I'm currently seeking a co-op
        or internship opportunity for the Summer of 2025.{' '}
      </p>
      <p>
        During my time at UC, I've had the opportunity to develop web
        applications in classes, hackathons, and at a{' '}
        <a
          className='font-semibold'
          href='https://cincinnatichildrens.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          large corporation.
        </a>
      </p>
    </section>
  )
}

export default Intro
