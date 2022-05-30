# Shortly mobile app

URL shortening is a technique on the Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page

## Installation

- Make sure to have the latest android studio to develop this project we used `Android Studio Chipmunk | 2021.2.1`
- Xcode used `Version 13.4(13F17a)
- The ios app is running on the iPhone `13 pro max`
- The android app is running on the emulator `qemu-system-x86_64`

## Run the project

```
$ git@github.com:Jaman-dedy/shortly_mobile_app.git
$ cd shortly_mobile_app
$ yarn install
$ yarn start --reset-cache
$ yarn android
$ yarn ios
```

## User flow

- When the app opens the user will be presented with the home page
<img width="357" alt="image" src="https://user-images.githubusercontent.com/46047244/171057633-eff56727-2024-4766-be26-f65572a9b0ed.png">
- When the user clicks on the button without providing an link an error message is shown
<img width="352" alt="image" src="https://user-images.githubusercontent.com/46047244/171057728-74068eae-2c12-4e5c-87f1-e7a8177c23c8.png">
- If the user provide a wrong link an error message is displayed
<img width="362" alt="image" src="https://user-images.githubusercontent.com/46047244/171057808-6b98391c-ef90-44bb-b3e5-4531a2b02bf2.png">
- When the user provid a valid url link he will be redirected to the link history screen, he can shorten as many links he wants
<img width="377" alt="image" src="https://user-images.githubusercontent.com/46047244/171058014-1d39bd0e-3aad-4a70-8ea3-a59b0b6bd4a9.png">
- if the user delete all the link history he will be presented with an empty contenet screen
<img width="370" alt="image" src="https://user-images.githubusercontent.com/46047244/171058081-ededd394-f8c4-4ac3-86ef-f8c10a674d5b.png">

## Feature improvement
- setup correctly a ci/cd that will allow the team to get the build of the apps (android, ios) when pushing to production (merging to master branch)

