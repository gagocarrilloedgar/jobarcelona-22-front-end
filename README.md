# JOBarcelona '22 | Gift list Front-end

> This project was realized for the JOBarcelona '22 Hackaton front-end category.
> Consists of allowing its users to create gift lists and customize them.

It basically render a ScrollBox with many cards inside of it, with horizontal scroller in PC resolution, but in Mobile resolution the scroll changes to vertically.

### Proposed challenge

<img src="src/assets/ChallengeCapture.png" alt="Proposed challenge" />

### Final result

<img src="src/assets/FinalResultCapture.png" alt="Proposed challenge" />

## Atomic design

This project was done using an atomic design, which components folder have specific structure:

    .
    ├── components                  # This folder stores all the components.
    │   ├── atoms                   # Small components, like tags, title or descriptions
    │   ├── molecules               # Containers or wrappers, in this case will be the card component.
    │   └── organism                # These components are sections of the page , in this case will be the ScrollBox
    └── ...

## Languages and tools

<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />
<img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />

- React: I used this framework because im studying it, and i want to perform my knowledge (done with create-react-app)
- Typescript: With React, I used Typescript to do the components more stricted.
- StoryBook: To documentate the components I've used Story book. It's a library where you can see your components and test it.
- CSS: In style case, I've used CSS, the reason to not use SASS is about there are only few components, and this components don't require too many stylish.

## Installation

```shell
    # Clone repository
    git clone https://github.com/LuisMM24/jobarcelona-22-front-end

    # install dependencies
    npm install
```

```shell
    # run
    npm run start
    # test command
    npm run test
    # run storybook documentation
    npm run storybook
```

## License

[MIT](https://opensource.org/licenses/MIT)
