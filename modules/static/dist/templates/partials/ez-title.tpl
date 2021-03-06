<div class='cqz-result-title overflow' arrow-override=''>
    {{# if data.title }}
        {{#if data.hasAd}}
            <span class="ad">{{local 'ad-label'}}</span>
          {{/if}}
        <a extra="title" href="{{url}}">
          {{ emphasis data.title text 2 true }}
        </a>
    {{ else if data.name }}
        <a extra="title" href="{{url}}">{{ emphasis data.name text 2 true }}</a>
    {{ else if title }}
        <a extra="title" href="{{url}}">{{ emphasis title text 2 true }}</a>
    {{/if}}
</div>
