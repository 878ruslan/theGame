import { useEffect, useState } from 'react';
import { Wrapper, Table } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategories, updateCategory} from '../../store/gameSlice';
import { Spin } from 'antd';
import styles from './styles.module.scss';

export const Game = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.game.categories);
    const [loading, setLoading] = useState(true);

    return (
        <Wrapper className={styles.wrapper} >
          <Table className={styles.table}
          data={{
            a: [{ value: 100 }, { value: 200 }, { value: 300 }, { value: 400 }, { value: 500 }],
            b: [{ value: 100 }, { value: 200 }, { value: 300 }, { value: 400 }, { value: 500 }],
            c: [{ value: 100 }, { value: 200 }, { value: 300 }, { value: 400 }, { value: 500 }],
            d: [{ value: 100 }, { value: 200 }, { value: 300 }, { value: 400 }, { value: 500 }],
            e: [{ value: 100 }, { value: 200 }, { value: 300 }, { value: 400 }, { value: 500 }]
             }} 
          />
        </Wrapper>
      );
    };