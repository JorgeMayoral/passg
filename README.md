# Password Generator - NodeJs

A very simple password generator built with nodejs.

---

## ⛔ WARNING ⛔

This project doesn't have any security, passwords saved in text files are saved as plain text without any encryption.

Maybe I will improve it someday, but, for now, DO NOT use this program seriously, it is just an example cli program built with nodejs.

---

## Roadmap

- [ ] Better security

- [ ] Check password strength

- [ ] Better installation (?)

## Installation

Clone this repository and install dependencies with npm

```bash
  git clone https://github.com/JorgeMayoral/passg
  cd passg
  npm install
```

Create a syslink

```bash
  npm link
```

## Usage/Examples

### Print program help

```bash
passg -h
```

### Generate password with 16 characters and copy to clipboard

```bash
passg -l 16
```

### Generate password and save to pass.txt file without copy to clipboard

```bash
passg -s -o pass.txt -C
```

### Generate password without symbols or numbers

```bash
passg -S -N
```

### Generate password and print it

```bash
passg -p
```

## Contributing

Contributions are always welcome!

## Feedback

If you have any feedback, please reach out to me at [Twitter](https://twitter.com/Dev_Yorch)

## Author

- [@JorgeMayoral](https://www.github.com/JorgeMayoral)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

This project is based on the tutorial made by [Brad Traversy](https://github.com/bradtraversy)
You can check his video [here](https://www.youtube.com/watch?v=3Xx83JAktXk).
