/** @jsxImportSource @emotion/react */
import {useState} from 'react';
import {Intro} from '../components/leader/Intro';
import {Play} from '../components/leader/Play';
import {Standby} from '../components/leader/Standby';
import {Success} from '../components/leader/Success';

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
        return <Intro changeState={() => setState('playing')} />;
      case 'playing':
        return <Play changeState={() => setState('success')} />;
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
