import React from 'react';
import p_i from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div className={p_i.profileInfo}>
            <img src="https://res.cloudinary.com/teepublic/image/private/s--09E6bOfN--/c_crop,x_10,y_10/c_fit,h_1038/c_crop,g_north_west,h_1038,w_1038,x_-123,y_0/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-234,y_-111/b_rgb:0e121f/c_limit,f_jpg,h_630,q_90,w_630/v1606116559/production/designs/16396401_0.jpg" alt=""/>
            <div className={p_i.p}> Text about me</div>
        </div>
    );
};

export default ProfileInfo;