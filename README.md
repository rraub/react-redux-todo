Example React Redux Todo
========================

Based on the example Todo app from the [redux docs](http://redux.js.org/).


# Development

## Setting up your environment

You will need:

* [NPM - install NodeJS to get NPM](https://nodejs.org/en/)
* [Meteor](https://www.meteor.com/install)

After those have been installed, clone this repo:

```sh
npm install
meteor
```

You may have to run `sudo npm install` to get the NPM modules installed.

## Running Tests

Once you know meteor can run and launch without errors, you can run tests using:

```sh
npm test
```

## Writing Tests

Writing and running tests is an important part of any project.

Test files are "linked" to their source file. Say you are working on `client/components/home/title.jsx` and you want to write tests for it. Create a file: `client/components/home/tests/title.jsx`.

That file would look something like this:

```js
const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Title from '../title.jsx';

describe('Home title', () => {
  it('should display the title', () => {
    const title = {title: 'Party Time'};
    const el = shallow(<Title title={title} />);
    expect(el.find('h2').text()).to.be.match(/Party Time/);
  });
});
```

For more information on writing tests, read:

* [MochaJS](http://mochajs.org/) - this is our **test runner**
* [ChaiJS](http://chaijs.com/) - this is our **assertion library**
* [AirBnB:Enzyme Documentation](https://github.com/airbnb/enzyme) - this is the **React testing library** used
* [Mantra Testing](https://kadirahq.github.io/mantra/#sec-Testing) - this is the **methodlogy** used
