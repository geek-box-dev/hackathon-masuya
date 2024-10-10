/** @jsxImportSource @emotion/react */
import {useState} from 'react';
import {IntroStory} from '../components/IntroStory';
import {Playing} from '../components/Playing';
import {Standby} from '../components/Standby';
import {Success} from '../components/Success';

type LeaderScreenStatus = 'standby' | 'introduction' | 'playing' | 'success';

export type LeaderScreenProps = {
  changeState: () => void;
};

export function Leader() {
  const [state, setState] = useState<LeaderScreenStatus>('standby');

  const Screen = ({state}: {state: LeaderScreenStatus}) => {
    switch (state) {
      case 'standby':
        return <Standby changeState={() => setState('introduction')} />;
      case 'introduction':
        return <IntroStory changeState={() => setState('playing')} />;
      case 'playing':
        return <Playing changeState={() => setState('success')} />;
      case 'success':
        return <Success changeState={() => setState('standby')} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Screen state={state} />
    </div>
  );
}
