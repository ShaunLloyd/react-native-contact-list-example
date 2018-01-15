import { compose } from 'recompose';
import { withProps, withStyle } from 'utils';
import { s } from 'styles';
import { PillButton } from './pill-button.component';

export const WhitePillButton = compose(
  withStyle([s.bg_white, s.b__white, s.bw3]),
  withProps({ disabledStyle: [s.bg_white_50] }),
)(PillButton);

export const WhiteKnockoutPillButton = compose(
  withStyle([s.b__white, s.bw3]),
  withProps({ disabledStyle: [s.b__white_50] }),
)(PillButton);

export const PrimaryPillButton = compose(
  withStyle([s.bg_primary, s.b__primary, s.bw3]),
  withProps({ disabledStyle: [s.bg_tertiary, s.b__tertiary] }),
)(PillButton);

export const PrimaryKnockoutPillButton = compose(
  withStyle([s.b__primary, s.bw3]),
  withProps({ disabledStyle: [s.b__primary_50] }),
)(PillButton);

export const SecondaryPillButton = compose(
  withStyle([s.bg_secondary, s.b__secondary, s.bw3]),
  withProps({ disabledStyle: [s.bg_secondary_50] }),
)(PillButton);

export const SecondaryKnockoutPillButton = compose(
  withStyle([s.b__secondary, s.bw3]),
  withProps({ disabledStyle: [s.b__secondary_50] }),
)(PillButton);
