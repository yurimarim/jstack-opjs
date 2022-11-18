import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '637671336b597c9463687063',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'imagePath': '1668704749884-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '637671336b597c9463687064'
      },
      {
        'product': {
          'name': 'Coca-Cola',
          'imagePath': '1668705596584-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '637671336b597c9463687065'
      }
    ],
  }
];

export function Orders() {
  return(
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩🏼‍🍳"
        title="Em preparação"
        orders={[]}

      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}

      />
    </Container>
  );
}
