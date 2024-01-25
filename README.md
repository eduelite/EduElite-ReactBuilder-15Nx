## Webpack / React Tutorial

This tutorial helps you set up a simple React site bundled with Webpack.

feature: 
(1) can use windtail as css

build: (if failer error (unsupport module), then setup before build

[linux] export NODE_OPTIONS=--openssl-legacy-provider
[windows] set NODE_OPTIONS=--openssl-legacy-provider

deploy to surge

Unique Rule:

(1) in react-app webpack
new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "react",
          library: { type: "var", name: "react_youtube" },         // this is the remoteName in Federal Modulation, that must be unique
          filename: "remoteEntry.js", // <-- Meta Data
          exposes: {
              './web-components': './app.js',
          },        
          shared: ["react", "react-dom"]
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './*.html'
            }
          ]
        })
    ],

    customElements.define('react-element', Mfe4Element); //in App.js      react-element must be unique        
    <react-element></react-element>                      //in index.html
    

(2) in host app
<code>
const webComponentOptions:WebComponentWrapperOptions={
            remoteEntry: 'http://localhost:4204/remoteEntry.js',
            remoteName: 'react_youtube',                        //this is the react-app webpack library unique name
            exposedModule: './web-components',
            elementName: 'react-element'                        //this is the react-app webpack element unique name
        };
</code>
