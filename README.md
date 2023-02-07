# Remotion Matrix Renderer ⚡
Render [Remotion](https://www.remotion.dev/) videos blazingly fast using [Github Actions Matrix](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs/).

## Quick Demo
1. Fork this repository.
2. Run the `Render video by matrix` workflow under Actions tab.
3. Set your desired number of workers (max: 256).

 
## Usage in your project
1. Call this workflow in your project as shown below. 
2. Specify the required parameters: `num_of_workers`, `remotion_composition_id`, `remotion_entry_point`
3. The rendered video will be uploaded as an artifact.

```YAML
name: Call Remotion-Matrix-Renderer

on: push: main

jobs:
  call-workflow-in-another-repo:
    uses: yuvraj108c/Remotion-Matrix-Renderer/.github/workflows/render-video-matrix.yml@master
    with:
      num_of_workers: 10
      remotion_composition_id: Main
      remotion_entry_point: src/index.js
```

## Limitations
1. Rendering speed is highly dependent on the number of available github runners. 
2. Rendering on private repositories can consume your free github actions minutes quickly.
