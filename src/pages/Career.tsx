import * as React from 'react';

import Container from '@/layouts/Container';
import colors from '@/utils/colors';
import styled from 'styled-components';

import CenteredText from '@/atomics/CenteredText';
import { Heading1 } from '@/components/Heading1';

class Iam extends React.Component {
  public render() {
    return (
      <Container style={{maxWidth: "420px", width: "85%", margin: "auto"}}>
        <CenteredText color={colors.black}>
          <Heading1 margin={"7px 0 21px"} fontSize={"28px"}>Career</Heading1>
          <div style={{textAlign: "left"}}>            
            <Career>
              <Year>2011.4 ~ 2016.3</Year>
              <Work>慶應義塾大学商学部</Work>
              <Detail>
                株式会社divにてインターン。
                <br />
                ・説明会予約関連のシステムによる効率化
                <br />
              </Detail>
            </Career>

            <Career>
              <Year>2016.4 ~ 2017.3</Year>
              <Work>ソフトバンク株式会社</Work>
              <Detail>
              都内法人企業向けの営業
              <br />
                ・1年間で2000社の新規開拓を実施
              </Detail>
            </Career>

            <Career>
              <Year>2017.4 ~ 2019.5</Year>
              <Work>株式会社div</Work>
              <Detail>
                リードエンジニア
                <br />
                ・カスタマーサポート業務自動化 
                <br />
                ・決済システムのリプレース
                <br />
                ・Googleカレンダー連携した予約管理自動化
                <br />
                ・オンライン説明会システム構築
                <br />
                ・TECH::CAMP名古屋校舎の立ち上げ
                <br />
                ・業務用KPI管理ツール作成・納品(社外受託案件)
              </Detail>
            </Career>

            <Career>
              <Year>2019.5 ~</Year>
              <Work>株式会社ActEvolve</Work>
              <Detail>
                サーバーサイドエンジニア
              </Detail>
            </Career>
          </div>
        </CenteredText>
      </Container>
    )
  }
}

export default Iam;

const Career = styled.div`
  margin: 21px 0;
`

const Year = styled.h5`
  margin: 0 0 6px;
  padding: 1px 9px;
  font-weight: bold;
  background-color: ${colors.primary};
  color: ${colors.white};
  display: inline-block;
  border-radius: 10px;
`

const Work = styled.h3`
  font-size: 18px;
  margin: 3px 0 6px;
  padding-bottom: 3px;
  border-bottom: 1px solid ${colors.secondary};
`

const Detail = styled.p`
  font-size: 16px;
`