import ServicoDePagamento from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe('Testes do Serviço de Pagamento', function () {

    it('Validar que pagamento categoria cara é criado', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
        const retorno = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(retorno.codigoBarras, '0987-7656-3475');
        assert.equal(retorno.empresa, 'Samar');
        assert.equal(retorno.valor, 156.87);
        assert.equal(retorno.categoria, 'cara');
    });

    it('Validar que pagamento categoria padrão é criado', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1234-5678', 'Copel', 50);
        const retorno = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(retorno.codigoBarras, '1234-5678');
        assert.equal(retorno.empresa, 'Copel');
        assert.equal(retorno.valor, 50);
        assert.equal(retorno.categoria, 'padrão');
    });

    it('Validar que apenas o último pagamento será retornado', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1111', 'Empresa A', 30);
        servicoDePagamento.pagar('2222', 'Empresa B', 200);

        const retorno = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(retorno.codigoBarras, '2222');
        assert.equal(retorno.empresa, 'Empresa B');
        assert.equal(retorno.valor, 200);
        assert.equal(retorno.categoria, 'cara');
    });

});