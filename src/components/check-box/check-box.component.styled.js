import { compose } from 'recompose';
import { withProps, withStyle } from 'utils';
import { s } from 'styles';
import { CheckBox } from './check-box.component';

export const PrimaryCheckBox = compose(
  withStyle([s.ba, s.b__primary_60]),
  withProps({
    activeStyle: [s.bg_primary],
  }),
)(CheckBox);
