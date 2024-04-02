import React from 'react';
import UpdateAccountForm from '@/components/dashboard/myAccount/updateAccountForm';

export default function MyAccount() {
  return (
    <div className="relative overflow-x-auto">
      <h2 className="my-5 text-xl font-semibold text-blue">Update your information</h2>
      <p className="mb-10 text-sm text-light">
        You can easily update your account details by completing the following inputs
      </p>

      <div className="flex gap-5 flex-row">
        <UpdateAccountForm />
      </div>
    </div>
  );
}
