"use client";
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const BuyerSeller: FC = () => {
  const path = usePathname();
  const pathComputed = path === '/marketplace' ? '/marketplace/seller' : path;
  const t = useTranslations('Market')
  return (
    <div className="relative">
      <div className="w-[286px] h-[50px] bg-third p-[9px] flex select-none absolute -translate-y-[63px] right-0">
        <div className="bg-input flex flex-1">
          <Link href="/marketplace/seller" className={clsx("flex justify-center items-center flex-1", pathComputed.indexOf('/marketplace/seller') > -1 && 'bg-forth text-white')}>{t('Seller')}</Link>
          <Link href="/marketplace/buyer" className={clsx("flex justify-center items-center flex-1", pathComputed.indexOf('/marketplace/buyer') > -1 && 'bg-forth text-white')}>{t('Buyer')}</Link>
        </div>
      </div>
    </div>
  );
};
