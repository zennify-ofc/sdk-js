export interface APIErrors {
    // = general errors
    'UNKNOWN_ERROR': {
        id: string | number
    };
    'UNKNOWN_TRANSLATION': {
        code: keyof APIErrors | string
    };
    'INVALID_DISCORD_CHANNEL_FOR_MESSAGE': {}
    'MISSING_PERMISSIONS': {};
    'METHOD_NOT_ALLOWED': {};
    'EXPECTED_AN_OBJECT_ARRAY': ExpectedAdditionalData;
    'EXPECTED_A_STRING_ARRAY': ExpectedAdditionalData;
    'EXPECTED_A_NUMBER_ARRAY': ExpectedAdditionalData;
    'EXPECTED_AN_OBJECT': ExpectedAdditionalData;
    'EXPECTED_A_NON_EMPTY_OBJECT': ExpectedAdditionalData;
    'EXPECTED_A_STRING': ExpectedAdditionalData;
    'EXPECTED_A_NUMBER': ExpectedAdditionalData;
    'EXPECTED_A_VALID_ID': ExpectedAdditionalData;
    'EXPECTED_A_VALID_SNOWFLAKE_ID': {};
    'DUPLICATED_VALUES_ISNT_ALLOWED': {};
    // = oAuth errors
    'GRANT_CODE_MISSING_IN_QUERY': {};
    'INVALID_SCOPE': {};
    'VERIFY_YOUR_EMAIL': {};
    'PLEASE_REVERIFY': {};
    // = user errors
    'USER_NOT_FOUND': {};
    'USER_INVALID_NAME': {};
    /// legal errors
    'USER_LEGAL_DATA_ALREADY_EXISTS': {};
    'USER_LEGAL_RESPONSIBLE_INVALID': {};

    'USER_LEGAL_DOCUMENTS_REQUIRED': {};
    'USER_LEGAL_DOCUMENT_INVALID': {};
    'USER_LEGAL_NAME_INVALID': {};
    'USER_LEGAL_BORN_INVALID': {};
    'USER_LEGAL_PHONE_INVALID': {};
    'USER_LEGAL_ADDRESS_INVALID': { prop: InvalidAddressProps };

    'USER_LEGAL_RESPONSIBLE_DOCUMENTS_REQUIRED': {};
    'USER_LEGAL_RESPONSIBLE_DOCUMENT_INVALID': {};
    'USER_LEGAL_RESPONSIBLE_NAME_INVALID': {};
    'USER_LEGAL_RESPONSIBLE_BORN_INVALID': {};
    'USER_LEGAL_RESPONSIBLE_PHONE_INVALID': {};
    'USER_LEGAL_RESPONSIBLE_ADDRESS_INVALID': { prop: InvalidAddressProps };
    /// token errors
    'INVALID_TOKEN_NAME': {};
    'INVALID_TOKEN_EXPIRATION': {};
    'INVALID_TOKEN_PERMISSIONS': {};
    'YOU_REACHED_TOKEN_LIMIT': {};
    /// password errors
    'INVALID_PASSWORD': {};
    'YOU_MUST_INSERT_THE_ACTUAL_PASSWORD': {};
    'THE_PASSWORD_DOES_NOT_MATCH': {};
    'THE_PASSWORD_MUST_HAVE_AT_LEAST_8_CHARACTERS': {};
    'THE_PASSWORD_MUST_HAVE_AT_LEAST_ONE_NUMBER': {};
    'THE_PASSWORD_MUST_HAVE_AT_LEAST_ONE_LETTER': {};
    'THE_PASSWORD_MUST_HAVE_AT_LEAST_ONE_SPECIAL_CHARACTER': {};
    /// pix key errors
    'THE_EMAIL_SENDED_ISNT_VALID': {};
    'CELLPHONE_NUMBERS_MUST_HAVE_THE_9_DIGIT': {};
    'THE_CELLPHONE_NUMBER_MUST_HAVE_ONLY_DIGITS': {};
    'THE_PIX_KEY_INSERTED_ISNT_VALID': {};
    /// webhook url error
    'INSERT_A_VALID_URL': {};
    'THE_ONLY_ACCEPTED_PROTOCOL_IS_HTTPS': {};
    'THIS_DOMAIN_IS_BLACKLISTED': {};
    'THE_URL_EXTENSION_ISNT_ACCEPTED_YET': {};
    'THE_URL_IS_INACCESSIBLE_BY_THE_WEBHOOK_SERVER': {};
    'THE_URL_WOULD_NOT_HAVE_REDIRECTS': {};
    'THE_URL_HAS_TIMEOUT_5S': {};
    'WEBHOOK_RECEIVED_INVALID_DATA': { status: number };
    /// payment errors
    'INVALID_PAYMENT_METHOD': {};
    'BANK_INTERNAL_ERROR': {};
    // Order Errors
    'YOU_NEED_TO_INSERT_AT_LEAST_1_ITEM': {};
    'ONE_PROVIDED_PRODUCT_IS_OUT_OF_STOCK': {
        name: string
    };
    'WE_DONT_HAVE_THIS_AMOUNT_IN_STOCK': {
        name: string,
        received: string | number,
        available: string | number
    };
    'THIS_SELLER_WAS_BANNED_FROM_ZENNIFY': {};
    'WE_DO_NOT_YET_SUPPORT_MULTIPLE_USER_PRODUCTS': {
        name: string,
        id: string | number
    };
    'WE_DO_NOT_YET_SUPPORT_MULTIPLE_STORE_PRODUCTS': {
        name: string
        id: string | number
    };
    'YOU_ALREADY_HAVE_ANOTHER_ORDER_WAITING_PAYMENT': {
        id: string | number
    };
    'YOU_INSERTED_AN_INVALID_ADDITIONAL': {
        addon: string
    };
    'UNKNOWN_TRANSACTION': {}
    /// for update
    'INVALID_OPERATION_FOR_CURRENT_TRANSACTION_STATUS': {};
    'INVALID_OPERATION_FOR_PAYMENT_ENTITY': {};
    'INVALID_STATUS_FOR_TRANSACTION_UPDATE': {};
    'INVALID_REFUND_VALUE_EXCEEDS_ORDER_VALUE': {};
    'ORDER_TRANSACTION_ALREADY_REFUNDED': {};
    'FAILED_REFUND': {};
    'INVALID_METADATA': { details: string };
    // MP errors
    'MP_INVALID_TOKEN': {};
    'MP_ACCOUNT_OFFLINE': {};
    'MP_PIX_KEY_NOT_CONFIGURED': {};
    'MP_NOT_ALLOWED_TO_SELL': {};
    'MP_RATE_LIMIT': {};
    // Efi Errors
    'EFIBANK_INVALID_PIX_KEY': {};
    'EFIBANK_INVALID_CREDENTIALS': {};
    'EFIBANK_INVALID_SCOPES': {};
    'EFIBANK_INVALID_CERTIFICATE': {};
    'EFIBANK_INVALID_CLIENT_ID': {};
    'EFIBANK_INVALID_CLIENT_SECRET': {};
    'EFIBANK_BLOCKED_ACCOUNT': {};
    'EFIBANK_UNKNOWN_TRANSACTION': {};
    'EFIBANK_RATE_LIMIT': {};
    /// bad preference configuration
    'THIS_SELLER_HAS_NOT_YET_CONFIGURED_RECEIPT_VIA_PIX': {};
    'THIS_SELLER_HAS_NOT_YET_CONFIGURED_RECEIPT_VIA_BOLETO': {};
    'THIS_SELLER_HAS_NOT_YET_CONFIGURED_RECEIPT_VIA_CRYPTO': {};
    /// coupons
    'THIS_COUPON_DOES_NOT_EXISTS': {
        received: string
    };
    'THIS_COUPON_HAS_EXPIRED': {};
    'THIS_COUPON_REACHED_THE_USE_LIMIT': {};
    'SELECT_MORE_ITENS_TO_REACH_MINIMUM_COUPON_VALUE': {
        formated_value: string,
        value: number
    };
    'THIS_COUPON_IS_VALID_ONLY_FOR_THE_FIRST_BUY': {};
    'COUPON_EXCLUSIVE_FOR_SOME_PRODUCTS': { allowed: number[] };
    // store errors
    'UNKNOWN_STORE': {};
    'EXPIRED_STORE': {},
    'UNKNOWN_BANK': { received: string };
    'INVALID_STORE_NAME': {};
    'YOU_HAVE_ALREADY_MIGRATED': {};
    /// moderators errors
    'YOU_REACHED_MODERATOR_LIMIT': {};
    'INVALID_PERMISSIONS': {};
    'UNKNOWN_PERMISSION': { index: number };
    'MAX_MODERATOR_REQUESTS_REACHED': {};
    'INVALID_CODE': {};
    'UNKNOWN_CODE': {};
    'UNKNOWN_MODERATOR': {};
    /// AUTOROLE
    'UNKNOWN_AUTOROLE_RULE': {},
    'AUTOROLE_RULE_ALREADY_EXISTS': {};
    'YOU_REACHED_THE_AUTOROLE_RULE_LIMIT': {}
    /// bot errors
    'WAIT_OR_TRY_AGAIN_WITH_ANOTHER_DISCORD_BOT': {};
    'INVALID_DISCORD_BOT_TOKEN': {};
    'DISABLE_REQUIRE_CODE_GRANT': {};
    'UNKNOWN_DISCORD_CHANNEL': {};
    'ANOTHER_STORE_HAS_THIS_BOT': {}
    'UNKNOWN_APPLICATION': {}
    'WAIT_APPLICATION_UPLOAD': {}
    // product errors
    'UNKNOWN_PRODUCT': {};
    'INVALID_PRODUCT_NAME': {};
    'INVALID_PRODUCT_VALUE': {};
    'YOU_REACHED_THE_PRODUCT_LIMIT': {};
    'PRODUCT_NAME_ALREADY_EXIST': {};
    /// Description errors
    'INVALID_PRODUCT_DESCRIPTION_FOR_DISCORD': {};
    /// Stock errors
    'UNKNOWN_STOCK': {};
    'INVALID_STOCK_CONTENT': {};
    'INVALID_STOCK_COST': {};
    // coupon errors
    'UNKNOWN_COUPON': {},
    'INVALID_COUPON_NAME': {},
    'INVALID_COUPON_TYPE': {},
    'INVALID_COUPON_VALUE': {},
    'INVALID_COUPON_AMOUNT': {},
    'INVALID_COUPON_MIN_VALUE': {},
    'INVALID_COUPON_EXPIRATION': {},
    'INVALID_COUPON_MAX_USES_PER_USER': {}
    'INVALID_COUPON_ONLY_FIRST_BUY': {},
    'YOU_REACHED_THE_COUPON_LIMIT': {},
    'COUPON_NAME_ALREADY_EXIST': {}
    // Media Errors
    'NO_FILES_FOUND': {};
    'INVALID_FILE_TYPE': {};
    'INVALID_FILE_SIZE': {};
    'MEDIA_INVALID_SET': {};
    'MEDIA_INVALID_SET_STORE': {};
    'MEDIA_INVALID_SET_PRODUCTS': {};
    'MEDIA_INVALID_SET_DISCORD_SALE_PANELS': {};
    // Discord Panels Errors
    'UNKNOWN_PANEL': {};
    'INVALID_PANEL_NAME': {};
    'INVALID_PANEL_DESCRIPTION': {};
    'INVALID_PANEL_PLACEHOLDER': {};
    'YOU_REACHED_PANEL_LIMIT': {};
    'PANEL_NAME_ALREADY_EXIST': {};
    'YOU_REACHED_THE_PRODUCT_LIMIT_ON_PANEL': {};
    'STORE_ALREADY_CONFIGURED': {};
}

type InvalidAddressProps = "cep" | "state" | "city" | "neighborhood" | "line1" | "line2" | "number";
type ExpectedAdditionalData = {
    field: string;
    received: any;
    type: string,
    max_length?: string
}