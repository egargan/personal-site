<script lang="ts">
  import { fly } from 'svelte/transition';

  import CopyOnClickLink from "./_CopyOnClickLink.svelte";
</script>

<article class="flex flex-col md:flex-row mb-12 md:mb-24" in:fly={{ y: 15 }}>
  <div class="flex-initial h-32 w-44 md:ml-2 md:mr-12 mb-12 md:mb-0 self-center bg-grey-light"/>
  <div class="md:flex-1 text-lg md:translate-x-[8px]">
    <p class="mb-3">
      Hey! I’m Ed, a full stack software engineer living in London, building web apps and tools
      with the lovely folk at F-Secure.
    </p>
    <p class="mb-3">
      I’ve spent the last six or so years of my life writing code and building things. Having done
      a bit of everything, I’ve found my zen in front-end. Have a look at
      <a class="underline text-red" href="https://github.com/egargan">my GitHub</a>
      for a feel of the things I like to write.
    </p>
    <p>
      Say
      <CopyOnClickLink text="hello@edwardgargan.com"/>,
      or reach me on
      <a class="underline text-red" href="https://www.linkedin.com/in/edward-gargan-7a0016130">LinkedIn</a>.
    </p>
  </div>
</article>

<div class="md:flex gap-x-20 pb-8" in:fly={{ y: 15, delay: 40 }}>
  <section class="md:w-1/2 mb-8">
    <h1 class="text-lg font-heading mb-4">Skills & Approach</h1>
    <p class="mb-2">
      I get the most out of engineering when I’m building something visual. Websites, code doodles, even CLIs.
      I like making interfaces that make complicated tasks feel easy. The kind you use and you think, “nice”.
    </p>
    <p class="mb-2">
      SvelteKit and TailwindCSS are my go-to, and I’m always happy to build the parts behind websites with Node, Python, or Rust.
    </p>
    <p>
      I thrive in creative, agile teams that are proud of what they make. I love knowing the people I’m building things for, where I can.
    </p>
  </section>

  <section>
    <h1 class="text-lg font-heading mb-4">Experience</h1>
    <ul class="grid grid-cols-1 gap-y-4 mb-4">
      <li>
        <h2>Full Stack Engineer at F-Secure</h2>
        <p><i>2020 to present</i></p>
        <p>Web app dev</p>
      </li>
      <li>
        <h2>Software Engineer at Netcraft</h2>
        <p><i>2018 to 2020</i></p>
        <p>Android dev, mobile automation</p>
      </li>
    </ul>
    <p class="text-grey mt-4">
      After more?
      <a class="underline" href="https://www.linkedin.com/in/edward-gargan-7a0016130">Here's my CV</a>.
    </p>
  </section>
</div>
