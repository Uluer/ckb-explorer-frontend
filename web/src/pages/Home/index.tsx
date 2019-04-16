import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  HomeHeaderPanel,
  HomeHeader,
  LogoPanel,
  SearchPanel,
  BlockPanel,
  ContentTitle,
  ContentTable,
  TableMorePanel,
} from './index.css'
import AppContext from '../../contexts/App'
import { parseDate } from '../../utils/date'
import Page from '../../components/Page'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import {
  TableTitleRow,
  TableTitleItem,
  TableContentRow,
  TableContentItem,
  TableMinerContentItem,
} from '../../components/Table'
import HomeLogo from '../../asserts/logo_home.png'
import SearchLogo from '../../asserts/search.png'
import BlockHeightIcon from '../../asserts/block_height.png'
import TransactionIcon from '../../asserts/transactions.png'
import CellConsumedIcon from '../../asserts/cell_consumed.png'
import MinerIcon from '../../asserts/miner.png'
import TimestampIcon from '../../asserts/timestamp.png'
import MoreLeftIcon from '../../asserts/more_left.png'
import MoreRightIcon from '../../asserts/more_right.png'
import browserHistory from '../../routes/history'
import { fetchBlocks, fetchSearchResult } from '../../http/fetcher'
import { BlockWrapper } from '../../http/response/Block'
import { TransactionWrapper } from '../../http/response/Transaction'
import { AddressWrapper } from '../../http/response/Address'

export default () => {
  const appContext = useContext(AppContext)
  const initBlockWrappers: BlockWrapper[] = []
  const [blocksWrappers, setBlocksWrappers] = useState(initBlockWrappers)
  useEffect(() => {
    fetchBlocks().then(data => {
      setBlocksWrappers(data as BlockWrapper[])
    })
  }, [])

  const handleSearchResult = (q: string) => {
    if (!q) {
      appContext.toastMessage('Please input valid content', 3000)
    } else {
      fetchSearchResult(q).then((data: any) => {
        if (data.type === 'block') {
          browserHistory.push(`/block/${(data as BlockWrapper).attributes.block_hash}`)
        } else if (data.type === 'transaction') {
          browserHistory.push(`/transaction/${(data as TransactionWrapper).attributes.transaction_hash}`)
        } else if (data.type === 'address') {
          browserHistory.push(`/address/${(data as AddressWrapper).attributes.address_hash}`)
        } else {
          browserHistory.push('/search/fail')
        }
      })
    }
  }

  return (
    <Page>
      <Header search={false} />
      <Content>
        <HomeHeaderPanel width={window.innerWidth}>
          <HomeHeader>
            <LogoPanel>
              <img src={HomeLogo} alt="home logo" />
              <div>CKB Testnet Explorer</div>
            </LogoPanel>
            <SearchPanel width={window.innerWidth}>
              <input
                id="home__search__bar"
                placeholder="Block Heigth / Block Hash / TxHash / Address"
                onKeyUp={(event: any) => {
                  if (event.keyCode === 13) {
                    handleSearchResult(event.target.value)
                  }
                }}
              />
              <div
                role="button"
                tabIndex={-1}
                onKeyPress={() => {}}
                onClick={() => {
                  const homeSearchBar = document.getElementById('home__search__bar') as HTMLInputElement
                  handleSearchResult(homeSearchBar.value)
                }}
              >
                <img src={SearchLogo} alt="search logo" />
              </div>
            </SearchPanel>
          </HomeHeader>
        </HomeHeaderPanel>

        <BlockPanel width={window.innerWidth}>
          <ContentTitle>
            <div>Latest Blocks</div>
            <span />
          </ContentTitle>

          <ContentTable>
            <div>
              <TableTitleRow>
                <TableTitleItem image={BlockHeightIcon} title="Height" />
                <TableTitleItem image={TransactionIcon} title="Transactions" />
                <TableTitleItem image={CellConsumedIcon} title="Cell Consumed(B)" />
                <TableTitleItem image={MinerIcon} title="Miner" />
                <TableTitleItem image={TimestampIcon} title="Time" />
              </TableTitleRow>
              {blocksWrappers.map((block: any) => {
                return (
                  <TableContentRow key={block.attributes.block_hash}>
                    <TableContentItem content={block.attributes.number} to={`block/${block.attributes.number}`} />
                    <TableContentItem content={block.attributes.transactions_count} />
                    <TableContentItem content={block.attributes.cell_consumed} />
                    <TableMinerContentItem content={block.attributes.miner_hash} />
                    <TableContentItem content={parseDate(block.attributes.timestamp)} />
                  </TableContentRow>
                )
              })}
            </div>
          </ContentTable>
          <TableMorePanel>
            <div>
              <img src={MoreLeftIcon} alt="more left" />
              <div>
                <Link className="table__more" to="block/list">
                  {`More`}
                </Link>
              </div>
              <img src={MoreRightIcon} alt="more right" />
            </div>
          </TableMorePanel>
        </BlockPanel>
      </Content>
      <Footer />
    </Page>
  )
}
