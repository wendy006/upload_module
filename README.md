# Upload Module

## Description

##### 1. It is an upload module by React (take home assignment)

##### 2. The requirements were as follows:

- Upload channels: click / drag / drop
- Custodian & submit button
- Progress bar appears after submit button is clicked
- Asynchronous multi-threaded upload



## Output

- Online Demo Output (**codesandbox.io**):  [Codesandbox](https://codesandbox.io/p/github/wendy006/upload_module/csb-cb3v84/draft/smoosh-wave?selection=%5B%7B%22endColumn%22%3A46%2C%22endLineNumber%22%3A11%2C%22startColumn%22%3A46%2C%22startLineNumber%22%3A11%7D%5D&workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A3000%252C%2522url%2522%253A%2522cb3v84-3000.preview.csb.app%2522%252C%2522key%2522%253A%2522cl9t58j4i01ep356h4rutz9k4%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522cl9t511rm000wlrec6oce12s7%2522%252C%2522key%2522%253A%2522cl9t511m400ze356h3edmte54%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D)
- YouTube Demo Video: [Demo](https://youtu.be/VmT92noaqkg)
- Github Source: [Github](https://github.com/wendy006/upload_module)
- Note:
	- It is a simple demo, therefore there is no detailed consideration put on the implementation (it does not require a real server side and has no actual net request)
	- Some variables may be useless in this implementation, but they can be useful when it comes to the real uploading process. Therefore they are not removed from the code.
	- There is a typo in the video(has been fixed on the code): File to be Upload --> File(s) to Upload



## How to Test

### 1.Create the App

- The app is based on React (TypeScript)

```powershell
npx create-react-app my-app --template typescript
```



### 2.Install Dependencies

```powershell
npm install @material-ui/core
npm install @material-ui/lab
npm install @material-ui/icons
```



**If it complains about the 'confliction issue:'**

```
npm config set legacy-peer-deps true
```

**Then do the `npm intall` again**



