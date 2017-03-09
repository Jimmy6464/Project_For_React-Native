//
//  CalendarManager.m
//  BusinessShopApp
//
//  Created by Jimmy on 17/2/22.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
@implementation CalendarManager
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
