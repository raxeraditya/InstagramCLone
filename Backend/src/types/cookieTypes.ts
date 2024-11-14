interface cookieOption {
  maxAge: number;
  secure: boolean;
}

const cookieOPtionData: cookieOption = {
  maxAge: 1 * 24 * 60 * 60 * 1000,
  secure: false,
};

export default cookieOPtionData;
