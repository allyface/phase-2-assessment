- When you run a command in the terminal, where does BASH look for that command?

Aliases, then shell functions, then builtin commands, then hash tables, then the `PATH` variable

- On a UNIX computer, how do you stop a running process?

You can suspend a process using `CTRL + Z`, or kill a process using `CTRL + C`. If `CTRL + C` doesn't work you can use the `ps` command to find the process ID (`PID`) of what you want to stop then use the `kill` command with that `PID`.

- What packages do you have installed via homebrew?

Brew list: git, icu4c, node, openssl, postgresql, readline, trash, tree

Brew cask list: atom, caffeine, dash, google-chrome, growlnotify, iterm2, postico, postman, screenhero, sublime-text

- On a UNIX computer, how do you find the process id of a running process?

Use the `ps` command

- In a terminal, what does control-c do?

It's used to abort an application or process, but also gives that application or process the ability to interrupt the abort.

- What would be the result of typing the following commands?
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```

The user is in the `foo` directory so `pwd` would print `bar`

- How do you set an environment variable in your shell?

`EXPORT` changes from `~/.bashrc` or `~/.bash-profile` to set them permanently. If you want to change an env variable for just a session, you can `EXPORT` the change you want in the shell.

- What keyboard shortcut do you use to split the screen in your editor?

`CMD + K`, then the direction of the split

- How do you create an alias in your shell?

In your `.bashrc` file, use `alias` to set whatever alias you want to use equal to the command you want it to run

- When a terminal command completes, how can you tell if it was successful or not?

`echo $?` will return the exit status of your last command. 0 means it was successful, any other exit status means it was not.

- What does your `~/.gitconfig` have in it? (paste the whole file here)

`[user]
	email = ally.b.kendall@gmail.com
	name = allyface`

- What is the difference between a relative and absolute path?

A relative path is the path using your current working directory, absolute path is the path from the root directory(/).

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?

`cp README.md ../pinterest-for-dogs`  

- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

`CMD + O`

- What files or folders do you want all git repositories to ignore?

Anything that the project doesn't use directly or anything that should be kept private. Operating systems files (`.DS_Store`), application files, language and framework files, package manager downloads (like `node_modules`), and credentials.

- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?

`Array.forEach` changes the original array and `Array.map` creates a new array.
