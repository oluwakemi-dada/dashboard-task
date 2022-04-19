import React from 'react';
import Header from '../layouts/header/Header';
import styles from '../../styles/Reports.module.scss';

const Reports = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        {/* Item1 */}
        <div className={styles.item}>
          <div className={styles.money}>
            <div>1000</div>
            <div>$</div>
          </div>

          <p>Total Value of Disbursement</p>

          <div className={styles.policyProgress}>
            <div className={styles.progressTextValue}>
              <div className={styles.progressText}>Policy</div>
              <div className={styles.progressValue}>
                <div>400</div>
                <div>$</div>
              </div>
            </div>

            <progress id='file' value='400' max='1000'>
              32%
            </progress>
          </div>

          <div className={styles.claimProgress}>
            <div className={styles.progressTextValue}>
              <div className={styles.progressText}>Claim</div>
              <div className={styles.progressValue}>
                <div>800</div>
                <div>$</div>
              </div>
            </div>

            <progress id='file' value='800' max='1000'>
              32%
            </progress>
          </div>
        </div>

        {/* Item2 */}
        <div className={styles.item}>
          <div className={styles.money}>
            <div>2500</div>
            <div>$</div>
          </div>

          <p>Total Value of Disbursement</p>

          <div className={styles.policyProgress}>
            <div className={styles.progressTextValue}>
              <div className={styles.progressText}>Policy</div>
              <div className={styles.progressValue}>
                <div>1100</div>
                <div>$</div>
              </div>
            </div>

            <progress id='file' value='1100' max='2500'>
              32%
            </progress>
          </div>

          <div className={styles.claimProgress}>
            <div className={styles.progressTextValue}>
              <div className={styles.progressText}>Claim</div>
              <div className={styles.progressValue}>
                <div>800</div>
                <div>$</div>
              </div>
            </div>

            <progress id='file' value='1400' max='2500'>
              32%
            </progress>
          </div>
        </div>

        {/* Item3 */}
        <div className={styles.item}>
          <div className={styles.money}>
            <div>2500</div>
            <div>$</div>
          </div>

          <p>Total Value of Disbursement</p>

          <div className={styles.policyProgress}>
            <div className={styles.progressTextValue}>
              <div className={styles.progressText}>Policy</div>
              <div className={styles.progressValue}>
                <div>1100</div>
                <div>$</div>
              </div>
            </div>

            <progress id='file' value='1100' max='2500'>
              32%
            </progress>
          </div>

          <div className={styles.claimProgress}>
            <div className={styles.progressTextValue}>
              <div className={styles.progressText}>Claim</div>
              <div className={styles.progressValue}>
                <div>800</div>
                <div>$</div>
              </div>
            </div>

            <progress id='file' value='1400' max='2500'>
              32%
            </progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
