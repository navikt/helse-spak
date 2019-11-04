import React from 'react';
import Icon, { CommonIconProps } from '../Icon';

const MaleIcon = ({ fill = '#3385D1', ...rest }: CommonIconProps) => {
    return (
        <Icon {...rest}>
            <g stroke="none" fill="none" fillRule="evenodd">
                <g transform="translate(1.000000, 1.000000)" fill={fill}>
                    <path d="M11,0 C4.92525,0 0,4.92525 0,11 C0,17.07475 4.92490625,22 11,22 C17.0750938,22 22,17.0750938 22,11 C22,4.92525 17.07475,0 11,0 L11,0 Z M10.9996562,2.73246875 C11.7349375,2.73246875 12.3320312,3.32853125 12.3320312,4.06415625 C12.3320312,4.79978125 11.7345937,5.3961875 10.9996562,5.3961875 C10.264375,5.3961875 9.6683125,4.7994375 9.6683125,4.06415625 C9.6683125,3.328875 10.264375,2.73246875 10.9996562,2.73246875 L10.9996562,2.73246875 Z M14.4694688,8.0884375 L14.4694688,11.8005937 C14.4694688,12.1 14.2027188,12.3416562 13.8734063,12.3416562 C13.54375,12.3416562 13.2766563,12.1 13.2766563,11.8005937 L13.2766563,9.79446875 L13.2766563,9.1348125 L13.2766563,8.72403125 L13.2766563,8.7236875 C13.2766563,8.584125 13.1635625,8.4706875 13.0236563,8.4706875 C12.8899375,8.4706875 12.783375,8.5751875 12.7740938,8.7065 C12.772375,8.71303125 12.766875,8.71715625 12.766875,8.72403125 L12.766875,9.87559375 L12.766875,18.5095625 C12.766875,18.9285937 12.4279375,19.267875 12.00925,19.267875 C11.5905625,19.267875 11.2505938,18.92825 11.2505938,18.5095625 L11.2505938,18.49925 L11.2505938,14.570875 L11.2505938,12.670625 L11.2505938,12.3059062 C11.2505938,12.1684062 11.1385313,12.056 11,12.0556562 C10.861125,12.0556562 10.7494063,12.1684062 10.7494063,12.3059062 L10.7494063,12.670625 L10.7494063,14.570875 L10.7494063,18.4989062 L10.7494063,18.5092187 C10.7494063,18.92825 10.4097813,19.2675312 9.99075,19.2675312 C9.5720625,19.2675312 9.233125,18.9279062 9.233125,18.5092187 L9.233125,9.87525 L9.233125,8.7236875 C9.233125,8.7168125 9.22728125,8.71234375 9.22590625,8.70615625 C9.216625,8.57484375 9.1100625,8.47034375 8.97634375,8.47034375 C8.83678125,8.47034375 8.72334375,8.5834375 8.72334375,8.72334375 L8.72334375,8.7236875 L8.72334375,9.13446875 L8.72334375,9.794125 L8.72334375,11.80025 C8.72334375,12.0996562 8.45625,12.3413125 8.12659375,12.3413125 C7.7969375,12.3413125 7.53053125,12.0996562 7.53053125,11.80025 L7.53053125,8.08809375 L7.53053125,7.84815625 C7.53053125,6.68421875 8.771125,5.83584375 9.91959375,5.7715625 L10.7473438,5.7660625 L10.7473438,5.76296875 L11.0003438,5.7646875 L11.2533438,5.76296875 L11.2533438,5.7660625 L12.0810938,5.7715625 C13.2292188,5.8355 14.4701563,6.68421875 14.4701563,7.84815625 C14.4694688,7.90040625 14.4694688,8.0636875 14.4694688,8.0884375 L14.4694688,8.0884375 Z" />
                </g>
            </g>
        </Icon>
    );
};

export default MaleIcon;
