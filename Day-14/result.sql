SELECT COUNT(DISTINCT uw.user_id) participants
FROM user_wishlists uw
    INNER JOIN gift_exchanges ge ON uw.gift_name = ge.gift_name
    AND uw.user_id = ge.receiver_id;