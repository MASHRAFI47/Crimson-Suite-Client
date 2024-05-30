import PropTypes from 'prop-types';

const CouponCode = ({handleChange}) => {
    return (
        <div>
            <div>
                <label className="label">
                    <span className="label-text">Have Any Coupons?</span>
                </label>
                <input type="text" name="coupon-code" placeholder="Type your coupon only..." onChange={handleChange} className="input input-bordered w-full max-w-xs bg-neutral-600" />
            </div>
        </div>
    )
}

CouponCode.propTypes = {
    handleChange: PropTypes.function
}

export default CouponCode