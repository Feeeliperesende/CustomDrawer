import { StyleSheet } from 'react-native';
import Colors from '../../../Constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },

  userphoto: {
    borderColor: Colors.light.background,
    borderWidth: 1.5,
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  nursePhoto: {
    borderColor: Colors.light.background,
    borderWidth: 4,
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentInfo: {
    marginLeft: 15,
    paddingVertical: 10,
    //alignItems: 'center'
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoCel: {
    paddingTop: 3,
    fontSize: 15,
  },
});
