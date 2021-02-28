## Components
Reactive Native includes built in components and APIs

***Basic Components***:
View, Text, Image, TextInput, ScrollView, StyleSheet

***UI***:
Button, Picker, Slider, Switch

***List View***:
FlatList, SctionList 

***iOS***:
ActionSHeetIoS, AlertIOS, etc

***Andorid***:
BackHnadler, DatePickerAndroid, etc

## Creating a project 

1. Check if you have React Native CLI installed. If you don't have npm then [click here](https://www.npmjs.com/get-npm).

`sudo npm i -g react-native-cli`

2. Initilize the application. Replace the PROJECT_NAME to your own project name that you like!

`npx react-native init PROJECT_NAME`

3. Go to the directory of the project 

`cd PROJECT_NAME`

4. Use Visual Studio Code to open. If you don't have it then [click here](https://code.visualstudio.com/download) to download! If you run into the probelms [click here](https://stackoverflow.com/questions/29971053/how-to-open-visual-studio-code-from-the-command-line-on-osx).

`code .`

5. Install the required dependency for the project. Right here, we use icon and ID packages to generate ID for shopping list. 

`npm i react-native-vector-icons`
react-native link react-native-vector-icons
`npm i uuidv4`

6. Run the Android applicaiton here. If you want to run iOS [clcik here](https://reactnative.dev/docs/environment-setup)

`npx react-native run-android`



