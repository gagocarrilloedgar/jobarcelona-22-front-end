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
    │   └── organism                # These are sections of the page or template, in this case will be the ScrollBox
    └── ...

> The atoms are designed as follows:

```shell
    # it receives children for params (controlled with types)

    import React from "react";
    # this component renders the title of the card, the value passes for children
    const CardTitle: React.FC<IChildren> = ({ children }) => {
        return <h2 className="Title">{children}</h2>;
    };

export default CardTitle;


```

## Installation

### Languages and tools

[<img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;" />
[<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />
[<img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />

Dentro de un ecosistema en particular, puede haber una forma común de instalar cosas, como usar Yarn, NuGet o Homebrew. Sin embargo, considere la posibilidad de que quien esté leyendo su archivo README sea un novato y desee más orientación. Enumerar los pasos específicos ayuda a eliminar la ambigüedad y hace que las personas usen su proyecto lo más rápido posible. Si solo se ejecuta en un contexto específico, como una versión de lenguaje de programación o un sistema operativo en particular, o tiene dependencias que deben instalarse manualmente, agregue también una subsección de Requisitos.

```shell
    # Clone repository
    git clone https://github.com/LuisMM24/jobarcelona-22-front-end

    # install dependencies
    npm i  o npm/yarn i
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

Inlcuir la licéncia y el link a esta
[MIT](https://opensource.org/licenses/MIT)
