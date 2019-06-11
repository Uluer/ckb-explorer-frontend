import styled from 'styled-components'
import { CommonPagition } from '../BlockList/styled'

export const AddressContentPanel = styled.div`
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props: { width: number }) => (98 * props.width) / 1920}px;
`

export const AddressTitlePanel = styled.div`
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 12px;

  .address__title {
    color: rgb(20, 20, 20);
    font-size: 32pt;
    text-align: center;

    @media (max-width: 700px) {
      font-size: 30px;
    }
  }

  .address__content {
    display: flex;
    flex-direction: row;
    justify-content: center;

    #address__hash {
      color: rgb(136, 136, 136);
      font-size: 18px;

      @media (max-width: 700px) {
        font-size: 14px;
        height: 40px;
        width: 85%;
      }
      white-space: normal;
      word-wrap: break-word;
    }

    img {
      margin-left: 19px;
      @media (max-width: 700px) {
        margin-left: 8px;
      }
      width: 21px;
      height: 21px;
    }
  }
`

export const AddressOverviewPanel = styled.div`
  margin-top: 107px;
  margin-bottom: 50px;
  font-size: 50px;
  color: rgb(20, 20, 20);
  height: 70px;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 25px;
    margin-bottom: 5px;
    font-size: 30px;
  }

  &:after {
    display: block;
    content: '';
    margin: 0 auto;
    background: #3cc68a;
    height: 4px;
    width: 197px;

    @media (max-width: 700px) {
      width: 150px;
    }
  }
`

export const AddressCommonContent = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 72px 60px 56px 88px;
  margin: 0 auto;
  margin-top: 50px;
  background: white;
  border: 0px solid white;
  border-radius: 6px;
  box-shadow: 0px 5px 9px rgb(233, 233, 233);
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 90%;
    overflow-x: auto;
    padding: 10px;
    margin: 10px 10px;
    background: white;
    border: 0px solid white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }
`

export const AddressTransactionsPanel = styled.div`
  >div: nth-child(2) {
    width: 100%;
    overflow-x: auto;
  }
`

export const AddressTransactionsItem = styled.div`
  padding: 38px 83px 41px 83px;
  margin: 0 auto;
  margin-top: 10px;
  background: white;
  border: 0px solid white;
  border-radius: 6px;
  box-shadow: 0px 5px 9px rgb(233, 233, 233);
  display: flex;
  flex-direction: column;

  .transaction__hash__panel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .transaction_hash {
      font-size: 16px;
      color: rgb(75, 188, 142);
    }

    .transaction_block {
      font-size: 16px;
      color: rgb(75, 188, 142);
    }
  }

  .transaction__separate {
    width: 100%;
    height: 1px;
    margin-top: 30px;
    background: rgb(233, 233, 233);
  }

  .transaction__input__output {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 68px;
      height: 68px;
    }
  }
`

export const AddressScriptLabelPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 28px;

  > img {
    width: 20px;
    height: 20px;

    @media (max-width: 700px) {
      width: 15px;
      height: 15px;
    }
  }

  > span {
    font-size: 18px;
    @media (max-width: 700px) {
      font-size: 16px;
    }
    color: rgb(77, 77, 77);
    margin-left: 10px;
    margin-right: 30px;
  }
`

export const AddressScriptContentPanel = styled.div`
  @media (max-width: 700px) {
    width: 100%;
  }
`

export const AddressScriptContent = styled.div`
  border: none;
  width: 100%;
  padding: 18px 30px 10px 25px;
  font-size: 16px;
  font-weight: bold;
  color: #4d4d4d;

  @media (max-width: 700px) {
    font-size: 15px;
    margin: 0px;
    padding: 0px 0px 0px 25px;
  }
`

export const ScriptLabelItemPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px 0;
  width: 95%;

  > img {
    width: 9px;
    height: 9px;
  }

  > div {
    margin-left: 8px;
    color: #888888;
    white-space: normal;
    word-wrap: break-word;
  }

  > code {
    width: 100%;
    margin-left: 8px;
    color: #adadad;
    white-space: normal;
    word-wrap: break-word;
  }
`

export const AddressTransactionsCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 22px;

  .transaction__cell__hash {
    font-size: 16px;
    color: rgb(75, 188, 142);
    max-width: 320px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .transaction__cell__capacity {
    font-size: 16px;
    color: rgb(136, 136, 136);
    margin-left: 25px;
  }
`

export const AddressTransactionsPagition = styled(CommonPagition)`
  margin: 80px 0 150px 0;
  width: 100%;
  overflow-x: auto;
`

export const AddressCommonRowPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    flex-grow: 1;
  }

  > div:nth-child(2) {
    margin-left: 45px;

    @media (max-width: 700px) {
      margin-left: 0px;
    }
  }
`
