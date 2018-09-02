import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#stats': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 100 }],
    'borderRadius': '5px'
  },
  '#stats p': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  '#player-name': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700'
  },
  '#battle': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 100 }],
    'bottom': [{ 'unit': 'px', 'value': 100 }]
  },
  '#enemy': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '5px'
  },
  '#enemy-name': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700'
  },
  '#battle-log': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'width': [{ 'unit': 'px', 'value': 500 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  }
});
