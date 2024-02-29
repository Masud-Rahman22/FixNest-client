import Lottie from "lottie-react";
import terms from '../../../public/assets/terms&conditions/Animation - 1709241449608.json'

const Terms_Cond = () => {
    return (
        <div className="mx-20 text-center">
            <h1 className="font-inter font-extrabold text-4xl text-center mt-3">Terms<span className="text-blue-400">-</span>&<span className="text-blue-400">-</span>Conditions</h1>
            <div className="block">
                <div className="flex items-center justify-center my-10">
                    <Lottie className="w-52" animationData={terms}></Lottie>
                </div>
                <div className="">
                    <div className="space-y-5">
                        <p className="text-xl font-medium font-inter text-center">
                            These Terms and Conditions "Agreement" govern your use of the FixNest website and any related services provided by FixNest "Service". By accessing or using our Service, you agree to be bound by the terms and conditions of this Agreement.
                        </p>

                        <h1 className="text-2xl font-semibold font-inter text-blue-900 underline">Accounts</h1>

                        <p className="text-base font-medium text-gray-800 leading-normal text-center">Account Creation: When you create an account with us, you must provide us with accurate, complete, and up-to-date information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.

                            Account Responsibility: You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

                        <h1 className="text-2xl font-semibold font-inter text-blue-900 underline">Service</h1>

                        <p className="text-base font-medium text-gray-800 leading-normal text-center">
                            Availability: Our Service may be subject to certain limitations, delays, and other problems inherent in the use of the internet and electronic communications. We are not responsible for any delays, delivery failures, or other damage resulting from such problems.

                            Mobile Repair Services: We provide mobile repairing services based on the information provided by the customer. We strive to deliver quality service; however, we cannot guarantee the repair of every device or the recovery of every piece of data.
                        </p>

                        <h1 className="text-2xl font-semibold font-inter text-blue-900 underline">Payment</h1>

                        <p className="text-base font-medium text-gray-800 leading-normal text-center">Payment: Payment for our services is due upon completion of the repair. We accept cash, credit/debit cards, or other agreed-upon payment methods.

                            Refunds: Refunds may be provided at our discretion and are subject to the condition of the device and the nature of the repair.</p>

                        <h1 className="text-2xl font-semibold font-inter text-blue-900 underline">Intellectual Property</h1>

                        <p className="text-base font-medium text-gray-800 leading-normal text-center">
                            Content: Our Service may contain information, text, files, images, graphics, photos, audio, video, and any other materials provided by or on behalf of us (collectively referred to as "Content"). The Content may be protected by copyrights, trademarks, service marks, patents, trade secrets, or other proprietary rights and laws.
                            Limitation of Liability
                        </p>



                        <h1 className="text-2xl font-semibold font-inter text-blue-900 underline">Termination</h1>

                        <p className="text-base font-medium text-gray-800 leading-normal text-center">
                            Termination: We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                            Changes to This Agreement

                            Modifications: We reserve the right to modify this Agreement at any time. We will notify you of any changes by posting the new terms and conditions on this page.
                            Contact Us

                            If you have any questions about this Agreement, please contact us.
                        </p>

                        <h1 className="text-2xl font-semibold font-inter text-blue-900 underline">Disclaimer</h1>

                        <p className="text-base font-medium text-gray-800 leading-normal text-center">
                            Disclaimer: Our Service is provided on an "as-is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the use or the results of our Service.

                            Limitation of Liability: In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms_Cond;