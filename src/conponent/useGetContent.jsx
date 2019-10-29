import { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'lodash';

import constant from '../constant';

const useGetContent = () => {
    const initialState = {
        navbarItems: ['loading...'],
        duration: 'loading...',
        detail: 'loading...',
        condition: 'loading...'
    };

    const [content, setContent] = useState(initialState);

    useEffect(() => {
        axios
            .get(constant.APIPath)
            .then(res => {
                const unwrappedRes = get(res, 'data', {});
                console.log('asdfsdfsdf', get(res, 'data'));
                setContent(unwrappedRes);
            })
            .catch(() => {
                setContent(constant.ywcJSON);
            });
    }, []);

    return content;
};

export default useGetContent;
