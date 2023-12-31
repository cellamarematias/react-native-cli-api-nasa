# Proyecto de React Native con React Navigation y consumo de la API de la NASA

Este proyecto de React Native utiliza React Navigation para la navegación entre pantallas y consume la API de la NASA para mostrar la Imagen Astronómica del Día (APOD) y las imágenes de los últimos cinco días.

![rpint1](https://github.com/cellamarematias/react-native-cli-api-nasa/assets/88092713/c89452fc-c069-4272-943f-45871e90c12a)
![print2](https://github.com/cellamarematias/react-native-cli-api-nasa/assets/88092713/bd30d8ad-af49-43b7-9862-69475a9993ce)
![print3](https://github.com/cellamarematias/react-native-cli-api-nasa/assets/88092713/9a4754f5-048a-4ebe-9166-0aeebd607486)
![print4](https://github.com/cellamarematias/react-native-cli-api-nasa/assets/88092713/07c4c2fd-7775-4f23-b481-cdab9c29f435)

Configuración del proyecto
Clona este repositorio en tu máquina local.

Navega al directorio del proyecto:

```
cd nombre-del-proyecto
Instala las dependencias del proyecto:
npm install
```

Configuración de la clave de API
Para consumir la API de la NASA, necesitarás una clave de API válida. Sigue estos pasos para configurar tu clave de API:

- Regístrate en el sitio web de la NASA API para obtener una clave de API.

- Copia la clave de API generada.

- En el archivo utils/fetch.js, reemplaza el valor de la constante API_KEY con tu propia clave de API.

## Configuración de React Navigation
Este proyecto utiliza React Navigation para la navegación entre pantallas. Asegúrate de seguir estos pasos para configurar correctamente React Navigation:

Instala las dependencias de React Navigation:

```
npm install @react-navigation/native @react-navigation/stack
```

Instala las dependencias adicionales requeridas para la navegación en Android:
```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
Sigue las instrucciones de configuración adicionales para Android e iOS en la documentación oficial de React Navigation.

## Ejecución del proyecto
Conecta un dispositivo móvil o inicia un emulador.

Inicia el servidor de Metro Bundler:

```
npx react-native start
```

Compila e instala la aplicación en el dispositivo/emulador:
```
npx react-native run-android   # Para Android
npx react-native run-ios       # Para iOS
```

La aplicación se abrirá en tu dispositivo/emulador y podrás ver la Imagen Astronómica del Día y las imágenes de los últimos cinco días de la NASA, con la navegación entre pantallas habilitada gracias a React Navigation.
