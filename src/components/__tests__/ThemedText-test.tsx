import { ThemedText } from '@components/ui/ThemedText';
import * as React from 'react';
import renderer from 'react-test-renderer';


it(`Theme test correctly`, () => {
  const tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>).toJSON();

  expect(tree).toMatchSnapshot();
});
