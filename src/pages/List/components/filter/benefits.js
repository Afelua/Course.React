import React from 'react'
import FilterLink from '../../containers/benefitsFilter'
import { BenefitsFilters } from '../../actions'
import styles from '../../../../styles.less';

const Benefits = () => (
        <div className={styles.filterItem}>
            <h2 className={styles.search__title}>Services</h2>
            <div className={styles.filterItem__row}>
                <div className={styles.services}>
                    <FilterLink filter={BenefitsFilters.ANIMALS_ALLOWED}>
                        Animals allowed
                    </FilterLink>
                    <FilterLink filter={BenefitsFilters.SMOOKING_ROOM}>
                        Smooking Room
                    </FilterLink>
                    <FilterLink filter={BenefitsFilters.SEA_VIEW}>
                        Sea View
                    </FilterLink>
                    <FilterLink filter={BenefitsFilters.SWIMMING_POOL}>
                        Swimming pool
                    </FilterLink>
                    <FilterLink filter={BenefitsFilters.WI_FI}>
                        Wi Fi 24 H
                    </FilterLink>
                    <FilterLink filter={BenefitsFilters.BREAKFAST_INCLUDED}>
                        Breakfast Included
                    </FilterLink>
                </div>
            </div>
        </div>
);

export default Benefits
