# **SnipX Template**
**Chrome extension template, using React, Webpack, and Tailwind.**

<br>

## **Table of Contents**
1. [Requirements](#Requirements)<br>
2. [Installation](#Installation)<br>
3. [Manifest](#Manifest)<br>
4. [Config](#Config)<br>
5. [Development](#Development)<br>
6. [Production](#Production)<br>
7. [Resources](#Resources)<br>
8. [License](#License)

<br>

## **Requirements**
So far, this template **does not** support **Firefox**, **Safari**, or any **non chromium-based** browsers.
- **Node.js**
- Compatible browsers:
    - **[Chrome](https://www.google.com/chrome/)**
    - **[Edge](https://www.microsoft.com/edge/)**
    - **[Brave](https://brave.com/)** - hasn't been tested
    - **[Opera](https://www.opera.com/)** - hasn't been tested

<br>

## **Installation**
First, download the repo. If you have `git` installed run the following command or download a [zip](https://github.com/arakilian0/app/archive/refs/heads/main.zip).
```bash
git clone https://github.com/arakilian0/snipx-template
```
Then, install dependencies.
```bash
cd snipx-template
npm install
```
Now you should have the code installed. Feel free to continue reading...

<br>

## **Manifest**
The **manifest.json** file has been abstracted into **package.json**. It get's bundled in `npm run dev` and `npm run build`. You can also run it manually:
```bash
npm run build --manifest
```

<br>

## **Config**
This template uses several paths throughout the application, that you can easily modify in **package.json**.

<!-- ENTRY -->
<details open>
    <summary>
        <strong>config.entry</strong>
    </summary>

- **default**: src
- **dependant**:
    - tailwind.config.js
    - lib/buildWebpack.js
</details>

<!-- ASSETS -->
<details>
    <summary>
        <strong>config.assets</strong>
    </summary>

- **default**: assets
- **dependant**:
    - lib/buildWebpack.js
</details>

<!-- OUTPUT -->
<details>
    <summary>
        <strong>config.output</strong>
    </summary>

- **default**: build
- **dependant**:
    - lib/buildClean.js
    - lib/buildManifest.js
    - lib/buildWebpack.js
    - lib/buildZip.js
</details>

<!-- ZIP.OUTPUT -->
<details>
    <summary>
        <strong>config.zip.output</strong>
    </summary>

- **default**: dist
- **dependant**:
    - lib/buildClean.js
    - lib/buildZip.js
</details>

<!-- SEPERATOR -->
<details>
    <summary>
        <strong>config.zip.seperator</strong>
    </summary>

- **default**: -
- **dependant**:
    - lib/buildZip.js
</details><br>

***Note: If you update 'config.entry', make sure to update 'nodemonConfig' for `npm run dev` to work properly.***

```
// package.json

{
    ...,
    "nodemonConfig": {
        "ext": "js, jsx, json, css, html, svg",
        "watch": [
            "your-new-directory/**/*", // update this too...
            "package.json"
        ]
    },
    ...
}
```

<br>

***Note: If you update the 'lib' directory name, make sure to update 'scripts'!***

```
// package.json

{
    ...,
    "scripts": {
        "dev": "nodemon ./your-new-directory/build.js",
        "build": "node ./your-new-directory/build.js"
    },
    ...
}
```

<br>

## **Development**
### **Live Reload**
Use the following command to run the extension in development mode:
```bash
npm run dev
```
### **Build Scripts**
The following command can be used to build the project files for a Chrome extension. The difference between **build** and **dev** is simply [nodemon](https://nodemon.io/). You can refer to **scripts** in **package.json** or the code-block above.
```bash
npm run build
```
Optionally, you can pass arguments to the build command. Doing so will cancel the full build and will only run the arguments provided. 

<!-- CLEAN -->
<details open>
    <summary>
        <strong>npm run build --clean</strong>
    </summary>

- **script**: lib/buildClean.js
- **description**: deletes **output** and **zip.output** directories
</details>

<!-- MANIFEST -->
<details>
    <summary>
        <strong>npm run build --manifest</strong>
    </summary>

- **script**: lib/buildManifest.js
- **description**: creates the **manifest.json** file
</details>

<!-- WEBPACK -->
<details>
    <summary>
        <strong>npm run build --webpack</strong>
    </summary>

- **script**: lib/buildWebpack.js
- **description**: bundles **entry** files into **output**
</details>

<!-- ZIP -->
<details>
    <summary>
        <strong>npm run build --zip</strong>
    </summary>

- **script**: lib/buildZip.js
- **description**: zip **output** directory into **zip.output**
</details><br>

***Note: Running `npm run build` is the same as running `npm run build --clean --manifest --webpack`.***

***Note: Avoid using `--zip` with other arguments.***

### **Try it out!**
To test it, open Chrome:
1. Find **Manage extensions**
2. Enable **Developer mode**
3. Install using **Load Unpacked**
4. Load **./build** directory

<br>

## **Production**
To **make sure webpack finishes** before we zip it, first run the build command:
```bash
npm run build
```
Then zip it.
```bash
npm run build --zip
```
Now we have a zipped version of our build. In Chrome, after activating `Developer mode` we can load our extension using `Load Unpacked` referencing our **./build** folder, or `Load Packed` using the generated **zip file**.

<br>

## **Resources**
### [Chrome Extension Documentation - MV3](https://developer.chrome.com/docs/extensions/mv3/)
### [Webpack Documentation](https://webpack.js.org/guides/getting-started/)
### [React Documentation](https://react.dev/learn)
### [Nodemon Documentation](https://github.com/remy/nodemon#nodemon)
### [Tailwind Documentation](https://tailwindcss.com/docs/installation)

<br>

## **License**
MIT License

Copyright (c) 2023 Michael Arakilian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.