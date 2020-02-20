import React, { Component } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Cronometro extends Component {

  constructor(props) {
    super(props);
    this.state = { n: 0, botao: 'INICIAR' };
    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {
    let s = this.state;

    if (this.timer != null) {
      //Parar e limpar o timer
      clearInterval(this.timer);
      this.timer = null;
      s.botao = "INICIAR"
    } else {
      //Iniciar cronometro
      this.timer = setInterval(() => {
        let s = this.state;
        s.n += 0.1;
        this.setState(s);
      }, 100);
      s.botao = "PARAR"
    }

    this.setState(s);
  }

  limpar() {
    if (this.timer != null) {
      //Parar e limpar o timer
      clearInterval(this.timer);
      this.timer = null;
    }

    let s = this.state;
    s.n = 0;
    s.botao = "INICIAR"
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./img/relogio.png')} />
        <Text style={styles.timer}>{this.state.n.toFixed(2)}</Text>
        <View style={styles.btnarea}>
          <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
            <Text style={styles.botaoText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.limpar}>
            <Text style={styles.botaoText}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ECCFA'
  },
  timer: {
    color: '#FFF',
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: -140
  },
  btnarea: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80

  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 10,
    borderRadius: 10
  },
  botaoText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})