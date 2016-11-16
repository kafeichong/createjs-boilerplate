import utils from '../../source/app/modules/utils';

test('Sets width and height of DOM element (including CSS)', () => {
  const el = document.createElement('div');
  utils.setWH(el, 1000, 500, true);

  expect(el.width).toEqual(1000);
  expect(el.height).toEqual(500);
  expect(el.style.width).toEqual('1000px');
  expect(el.style.height).toEqual('500px');
});

test('Sets width and height of DOM element (without CSS)', () => {
  const el = document.createElement('div');
  utils.setWH(el, 1000, 500, false);

  expect(el.width).toEqual(1000);
  expect(el.height).toEqual(500);
  expect(el.style.width).toEqual('');
  expect(el.style.height).toEqual('');
});

test('Sets scale of EaselJS element', () => {
  console.log(utils.drawCtr());
  // const ctr = new Container();
  //
  // utils.scaleXY(ctr, 0.5);
  //
  // expect(ctr.scaleX).toEqual(0.5);
  // expect(ctr.scaleY).toEqual(0.5);
});
