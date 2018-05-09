# `micro-anonymizomatic`

Make strings anonymous.

This utility is not meant to hash passwords. It uses `md5` to hash strings so that the same input will always generate the same output, but it is not possible to reverse engineer the output back to the input.

## Deployment

Your own `micro-anonymizomatic` is one click away:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/withspectrum/micro-anonymizomatic)

You can also deploy with a single command from the terminal (assuming you have [`now`](https://now.sh) installed):

```sh
now withspectrum/micro-anonymizomatic
```

## Usage
Send a string to micro-anonymizomatic with the `text` query parameter:

```sh
https://your-url.now.sh?text='this will be hashed'
```

And you will get the parsed data in the following format:

```JSON
{
	"text": "hashed-version-of-your-text-query"
}
```

## Development

```sh
git clone git@github.com:withspectrum/micro-anonymizomatic.git
yarn run dev
```

The server will then be listening at `localhost:3000`.

## Updating

The `master` branch of this repository is what you will be deploying. To update to a new version with potential bugfixes, all you have to do is run the `now` command again and change the URL you call in your app! 👌

## License

Copyright (c) 2018 Space Program, Inc. Licensed under the MIT license. See [LICENSE.md](LICENSE.md) for more information.
