<script lang="ts">
  import CopyOnClickLink from "./_CopyOnClickLink.svelte";
</script>

<article class="flex mb-24 mt-14">
  <div class="bg-grey-light h-30 w-44 flex-initial ml-2 mr-12"/>
  <div class="flex-1 text-lg translate-x-[8px]">
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

<div class="flex gap-x-20">
  <section class="w-1/2">
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
    <div class="mb-4">
      <h2>Full Stack Engineer at F-Secure</h2>
      <p><i>2020 to present</i></p>
      <p>Web app dev</p>
    </div>
    <div class="mb-4">
      <h2>Engineer at Netcraft</h2>
      <p><i>2018 to 2020</i></p>
      <p>Android dev, mobile automation</p>
    </div>
    <p class="text-grey mt-4">
      After more?
      <a class="underline" href="https://www.linkedin.com/in/edward-gargan-7a0016130">Here's my CV</a>.
    </p>
  </section>
</div>

