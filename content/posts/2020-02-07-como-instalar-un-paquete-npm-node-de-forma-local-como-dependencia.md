---
title: "Cómo instalar un paquete de Node de forma local como dependencia de un proyecto"
date: 2020-02-07
categories:
  - Code
  - Popular
tags:
  - npm
  - node
  - yalc
template: post
thumbnail: "../thumbnails/npm.png"
slug: como-instalar-un-paquete-npm-node-de-forma-local-como-dependencia
---

> Este post trata sobre probar tus paquetes que aún no han sido publicados en un registry de npm.

Hay veces en las que se quiere instalar un paquete local como dependencia del proyecto. Puede que estés escribiendo un paquete para distribución general; o puede que estés contribuyendo a un paquete de código abierto, o un paquete personal privado, o algo interno de tu equipo. Estás trabajando en cambios locales y necesitas probarlos antes de commitearlos, y mucho menos antes de abrir un pull request o deployar una actualización. ¿Cuál es la mejor manera de añadir la copia local del paquete a un proyecto local para probar el trabajo real?

Una de las formas podría ser subir nuestros cambios a Gitub/Gitlab/Bitbucket y agregarlos como dependencia con `npm install` o `yarn add` y junto a `<remote url>[#<ref>]` (o en GitHub por ejemplo `username/repo#branch-name-or-commit-or-tag`). Pero eso requiere de estar pusheando las actualizaciones y de reinstalar el paquete en el proyecto con cada cambio.

Otra opción es agregar el paquete con `npm add relative/path` o `yarn add file:relative/path`, que copian el directorio del paquete en los `node_modules` del proyecto. Lo malo es que no instala dependencias. Tampoco responde a las actualizaciones que realices. Además, el uso de una ruta relativa puede ser difícil de manejar con `../`.

Pero ¿qué me funcionó a mi? Usar **yalc**

## Yalc

**yalc** mantiene su propia "registry" local, en `~/.yalc`.

- **Publica** un paquete con yalc, y una copia completa del paquete se copia en el registry.
- **Instala** un paquete del registry de yalc, y el proyecto instalará esa copia de la misma manera que instalaría un paquete desde un registry externo.
- **Actualiza** un paquete publicado en el registry de yalc, y la actualización ya está disponible en los proyectos dependientes; incluso puede publicar y actualizar automáticamente los proyectos dependientes con un solo comando.

Para evitar que las cosas colisionen, yalc firma cada versión publicada con un hash. Y yalc puede almacenar tantas versiones de un paquete (esa es la versión package.json) como quiera.

### tldr;

_La explicación de todos los comandos viene [más adelante](#instala-yalc)_

En pocas palabras el flujo de trabajo básico de yalc es:

```bash
# configuración
# --------------

$ npm install -g yalc # o yarn global add yalc


# usa yalc
# -----------------------

$ cd path/to/package
my-package $ yalc publish

# si el proyecto donde lo quiero probar
# ya tiene my-package como una dependencia
project $ npm uninstall -S my-package # (or `yarn remove my-package`)

project $ yalc add my-package

# si my-package tiene dependencias
project $ npm install # (or `yarn`)


# desarrollo
# -------

# empieza a hackear ...
# y al terminar

my-package $ yalc push

# si las dependencias de my-package cambiaron, instala las dependencies
project $ npm install # (or `yarn`)

# prueba el proyecto, hackea de nuevo, yalc push, repetir hasta terminar
```

### Instala yalc

```bash
$ npm install -g yalc # o `yarn global add yalc`
```

### Publica un paquete en tu registry local de Yalc

```bash
# el el directorio del paquete en desarrollo
$ yalc publish
```

Este comando lanzará al final el nombre real del paquete que usaremos en el siguiente comando.

### Añade el paquete como una dependencia desde el registry de yalc

```bash
# en el proyecto donde probarás el paquete
$ yalc add <dependency name>
```

Si miras tu `package.json` verás que la dependencia ha sido añadida, con una ruta parecida a `file:.yalc/`.

```json
"dependencies": {
  "my-package": "file:.yalc/my-package"
}
```

yalc también agregará el archivo `yalc.lock`, que lista las dependencias del proyecto agregadas con yalc. Después de que yalc agregue el paquete y el `yalc.lock` en el directorio raíz del proyecto dependiente (donde pruebas tu paquete) se verá algo como:

```json
{
  "version": "v1",
  "packages": {
    "my-package": {
      "signature": "...", // un hash para identificar la versión del paquete en el registry de yalc
      "file": true // tipo de la conexión de yalc
    }
  }
}
```

yalc no instala las dependencias del paquete, por lo que si el paquete en desarrollo tiene sus propias dependencias en el `package.json`, éstas deberán ser instaladas en el proyecto de prueba como un segundo paso:

```bash
# en el proyecto donde se prueba el paquete
$ npm install # or yarn
```

### Sube los cambios del paquete a los proyectos dependientes locales

Después de guardar los cambios en el paquete en desarrollo, simplemente ejecuta:

```bash
# en el directorio del paquete en desarrollo
$ yalc push # shorthand para yalc publish --push

Pushing my-package@<version> in path/to/my-package
Pushing my-package@<version>-<hash8> added ==> path/to/my-project/node_modules/package.
Pushing my-package@<version> in path/to/my-project2
Pushing my-package@<version>-<hash8> added ==> path/to/my-project2/node_modules/package.
my-package@<version>-<hash8> published in store.
```

Esto publicará una nueva versión en el respository de yalc y actualizará automáticamente todos los proyectos locales donde yalc añadió el paquete a la nueva versión.

Si no deseas actualizar automáticamente la dependencia en todos los proyectos en los que se ha añadido (por ejemplo, si tiene varios proyectos con versiones distintas de la dependencia), utiliza:

```bash
# en el directorio del paquete en desarrollo
$ yalc publish
```

```bash
# en el proyecto donde se prueba el paquete
$ yalc update
```

Cuando las dependencias del paquete cambien, reinstala las dependencias del proyecto de dependencia (por ejemplo, `npm i` o `yarn`).

That's it!

---

¿Tienes otros flujos de trabajo favoritos para desarrollar paquetes que serán publicados? Me encantaría saber, ¡deja un comentario abajo! 💬👇
